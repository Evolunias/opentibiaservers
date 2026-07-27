import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-seasonal-status');
}

export default function Tibia76SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-seasonal-status" />;
}
