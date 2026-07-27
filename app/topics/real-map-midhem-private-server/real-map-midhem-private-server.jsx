import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-private-server');
}

export default function RealMapMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-private-server" />;
}
