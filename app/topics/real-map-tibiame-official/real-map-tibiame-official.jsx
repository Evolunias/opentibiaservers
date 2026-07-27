import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-official');
}

export default function RealMapTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-official" />;
}
