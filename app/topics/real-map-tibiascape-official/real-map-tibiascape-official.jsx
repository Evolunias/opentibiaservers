import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-official');
}

export default function RealMapTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-official" />;
}
