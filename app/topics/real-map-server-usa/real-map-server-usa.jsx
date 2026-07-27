import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-usa');
}

export default function RealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-usa" />;
}
