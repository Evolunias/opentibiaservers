import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-guide');
}

export default function NewVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-guide" />;
}
