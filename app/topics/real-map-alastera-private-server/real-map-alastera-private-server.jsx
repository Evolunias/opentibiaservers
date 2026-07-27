import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-private-server');
}

export default function RealMapAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-private-server" />;
}
