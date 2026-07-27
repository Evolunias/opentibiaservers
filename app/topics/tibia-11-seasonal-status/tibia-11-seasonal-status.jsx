import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-status');
}

export default function Tibia11SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-status" />;
}
