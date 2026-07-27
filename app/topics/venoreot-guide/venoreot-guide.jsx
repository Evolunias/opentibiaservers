import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-guide');
}

export default function VenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="venoreot-guide" />;
}
