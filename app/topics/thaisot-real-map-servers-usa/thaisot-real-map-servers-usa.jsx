import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-usa');
}

export default function ThaisotRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-usa" />;
}
