import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-official');
}

export default function RealMapTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-official" />;
}
