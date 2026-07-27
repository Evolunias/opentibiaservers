import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-status');
}

export default function Tibia81SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-status" />;
}
