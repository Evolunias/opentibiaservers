import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-brazil');
}

export default function RealMapPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-brazil" />;
}
