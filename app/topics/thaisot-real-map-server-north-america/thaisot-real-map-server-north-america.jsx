import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-north-america');
}

export default function ThaisotRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-north-america" />;
}
