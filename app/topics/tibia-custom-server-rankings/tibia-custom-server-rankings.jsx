import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-rankings');
}

export default function TibiaCustomServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-rankings" />;
}
