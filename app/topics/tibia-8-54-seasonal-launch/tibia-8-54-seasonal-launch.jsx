import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-launch');
}

export default function Tibia854SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-launch" />;
}
