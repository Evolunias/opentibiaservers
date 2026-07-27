import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-launch');
}

export default function Tibia14SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-launch" />;
}
