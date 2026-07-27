import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-ot');
}

export default function RealMapEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-ot" />;
}
