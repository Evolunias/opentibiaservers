import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-status');
}

export default function Tibia14SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-status" />;
}
