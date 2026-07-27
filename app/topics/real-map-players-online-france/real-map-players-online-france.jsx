import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-france');
}

export default function RealMapPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-france" />;
}
