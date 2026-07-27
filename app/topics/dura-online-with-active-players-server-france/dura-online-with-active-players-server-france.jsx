import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-active-players-server-france');
}

export default function DuraOnlineWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-active-players-server-france" />;
}
