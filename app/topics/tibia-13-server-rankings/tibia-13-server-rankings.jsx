import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-rankings');
}

export default function Tibia13ServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-rankings" />;
}
