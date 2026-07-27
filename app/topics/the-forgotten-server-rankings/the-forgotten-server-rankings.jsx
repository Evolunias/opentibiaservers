import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-rankings');
}

export default function TheForgottenServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-rankings" />;
}
