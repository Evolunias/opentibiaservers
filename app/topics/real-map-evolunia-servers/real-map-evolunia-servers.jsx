import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-servers');
}

export default function RealMapEvoluniaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-servers" />;
}
