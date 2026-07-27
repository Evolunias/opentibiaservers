import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-with-players');
}

export default function OtServerListWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-with-players" />;
}
