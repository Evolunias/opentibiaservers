import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-status');
}

export default function Tibia13SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-status" />;
}
