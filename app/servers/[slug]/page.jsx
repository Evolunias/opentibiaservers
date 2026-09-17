import { permanentRedirect } from 'next/navigation';
import { buildServerSlugMetadata } from '@/app/components/ServerSlugPage';

export async function generateMetadata({ params }) {
  return buildServerSlugMetadata(params.slug);
}

export default function ServerSlugRoutePage({ params }) {
  const slug = String(params.slug || '').toLowerCase();
  permanentRedirect(`/${slug}`);
}
