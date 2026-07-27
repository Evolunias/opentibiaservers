import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-seasonal-status');
}

export default function Tibia100SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-seasonal-status" />;
}
