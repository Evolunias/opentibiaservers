import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-rankings');
}

export default function FunServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="fun-server-rankings" />;
}
