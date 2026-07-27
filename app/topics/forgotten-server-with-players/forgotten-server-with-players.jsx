import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-with-players');
}

export default function ForgottenServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-with-players" />;
}
