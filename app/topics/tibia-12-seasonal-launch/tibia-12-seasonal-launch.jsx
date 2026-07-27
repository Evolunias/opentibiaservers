import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-seasonal-launch');
}

export default function Tibia12SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-seasonal-launch" />;
}
