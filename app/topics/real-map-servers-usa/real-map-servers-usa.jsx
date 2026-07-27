import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-usa');
}

export default function RealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-usa" />;
}
