import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-active-players-server-europe');
}

export default function DuraOnlineWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-active-players-server-europe" />;
}
