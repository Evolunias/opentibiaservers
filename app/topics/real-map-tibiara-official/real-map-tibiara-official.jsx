import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-official');
}

export default function RealMapTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-official" />;
}
