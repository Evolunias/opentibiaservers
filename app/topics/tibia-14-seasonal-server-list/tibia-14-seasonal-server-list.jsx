import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-server-list');
}

export default function Tibia14SeasonalServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-server-list" />;
}
