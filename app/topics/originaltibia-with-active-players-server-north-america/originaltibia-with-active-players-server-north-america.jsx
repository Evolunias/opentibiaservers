import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-active-players-server-north-america');
}

export default function OriginaltibiaWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-active-players-server-north-america" />;
}
