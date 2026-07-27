import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-map');
}

export default function ThaisotMapKeywordPage() {
  return <StaticKeywordPage slug="thaisot-map" />;
}
