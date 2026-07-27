import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-rankings');
}

export default function ForgottenServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-rankings" />;
}
