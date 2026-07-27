import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-rankings');
}

export default function TibiaPrivateServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-rankings" />;
}
