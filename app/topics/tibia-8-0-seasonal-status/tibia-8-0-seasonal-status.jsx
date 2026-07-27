import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-status');
}

export default function Tibia80SeasonalStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-status" />;
}
