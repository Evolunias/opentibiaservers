import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-active-players-server-france');
}

export default function OriginaltibiaWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-active-players-server-france" />;
}
