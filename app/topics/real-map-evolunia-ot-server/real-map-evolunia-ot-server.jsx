import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-ot-server');
}

export default function RealMapEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-ot-server" />;
}
