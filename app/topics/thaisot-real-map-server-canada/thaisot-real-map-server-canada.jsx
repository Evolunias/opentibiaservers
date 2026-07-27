import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-canada');
}

export default function ThaisotRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-canada" />;
}
