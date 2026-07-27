import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-usa');
}

export default function ThaisotRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-usa" />;
}
