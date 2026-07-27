import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-rankings');
}

export default function TibiaHighExpServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-rankings" />;
}
