import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map');
}

export default function ThaisotRealMapKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map" />;
}
