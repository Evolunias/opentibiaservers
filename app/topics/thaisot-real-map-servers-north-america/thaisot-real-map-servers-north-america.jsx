import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-north-america');
}

export default function ThaisotRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-north-america" />;
}
