import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-rankings');
}

export default function Tibia74ServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-rankings" />;
}
