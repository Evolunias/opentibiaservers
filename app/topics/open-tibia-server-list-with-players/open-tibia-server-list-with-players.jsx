import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-with-players');
}

export default function OpenTibiaServerListWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-with-players" />;
}
