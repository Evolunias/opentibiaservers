import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-private-server');
}

export default function RealMapEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-private-server" />;
}
