import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-status');
}

export default function Tibia84SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-status" />;
}
