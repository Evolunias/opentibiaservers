import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-server');
}

export default function RealMapEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-server" />;
}
