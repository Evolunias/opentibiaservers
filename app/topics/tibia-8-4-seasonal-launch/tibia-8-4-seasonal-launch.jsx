import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-launch');
}

export default function Tibia84SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-launch" />;
}
