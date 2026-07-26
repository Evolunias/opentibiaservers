import { redirect } from 'next/navigation';
import { getCuratedPage, getCuratedPages } from '@/lib/curated-pages';

export function generateStaticParams() {
  return getCuratedPages().map((page) => ({ slug: page.slug }));
}

export default function LegacyCuratedGuideRedirect({ params }) {
  const page = getCuratedPage(params.slug);
  redirect(page?.path || '/');
}
