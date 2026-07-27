import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-status');
}

export default function Tibia74SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-status" />;
}
