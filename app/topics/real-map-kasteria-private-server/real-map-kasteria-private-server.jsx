import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-private-server');
}

export default function RealMapKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-private-server" />;
}
