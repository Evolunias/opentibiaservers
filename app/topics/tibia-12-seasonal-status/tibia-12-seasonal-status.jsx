import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-seasonal-status');
}

export default function Tibia12SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-seasonal-status" />;
}
