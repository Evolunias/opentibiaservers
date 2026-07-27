import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-brazil');
}

export default function CustomMapPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-brazil" />;
}
