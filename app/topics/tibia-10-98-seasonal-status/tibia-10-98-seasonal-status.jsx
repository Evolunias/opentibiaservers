import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-seasonal-status');
}

export default function Tibia1098SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-seasonal-status" />;
}
