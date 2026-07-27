import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia');
}

export default function RealMapEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia" />;
}
