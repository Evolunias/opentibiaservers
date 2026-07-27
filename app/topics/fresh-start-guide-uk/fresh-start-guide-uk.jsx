import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-uk');
}

export default function FreshStartGuideUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-uk" />;
}
