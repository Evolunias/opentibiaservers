import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-seasonal-status');
}

export default function Tibia86SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-seasonal-status" />;
}
