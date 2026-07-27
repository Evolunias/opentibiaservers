import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-status');
}

export default function Tibia96SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-status" />;
}
