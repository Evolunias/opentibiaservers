import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-client');
}

export default function RealMapEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-client" />;
}
