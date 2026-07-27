import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-seasonal-status');
}

export default function Tibia772SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-seasonal-status" />;
}
