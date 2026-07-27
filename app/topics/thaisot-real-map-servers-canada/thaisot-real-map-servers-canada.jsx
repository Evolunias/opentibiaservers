import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-canada');
}

export default function ThaisotRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-canada" />;
}
