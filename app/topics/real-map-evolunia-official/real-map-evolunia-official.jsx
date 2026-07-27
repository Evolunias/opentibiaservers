import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-official');
}

export default function RealMapEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-official" />;
}
