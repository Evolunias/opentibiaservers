import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-with-players');
}

export default function TheForgottenServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-with-players" />;
}
