import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-with-players');
}

export default function BaiakServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-with-players" />;
}
