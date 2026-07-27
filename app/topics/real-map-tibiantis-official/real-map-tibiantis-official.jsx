import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-official');
}

export default function RealMapTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-official" />;
}
