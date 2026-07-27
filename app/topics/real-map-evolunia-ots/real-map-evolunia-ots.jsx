import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-ots');
}

export default function RealMapEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-ots" />;
}
