import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-status');
}

export default function Tibia854SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-status" />;
}
