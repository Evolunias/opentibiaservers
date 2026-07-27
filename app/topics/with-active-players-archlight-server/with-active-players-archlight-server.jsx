import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-archlight-server');
}

export default function WithActivePlayersArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-archlight-server" />;
}
