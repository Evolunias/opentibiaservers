import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-usa');
}

export default function RealMapClientUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-usa" />;
}
