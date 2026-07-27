import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-rankings');
}

export default function TibiaOtServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-rankings" />;
}
