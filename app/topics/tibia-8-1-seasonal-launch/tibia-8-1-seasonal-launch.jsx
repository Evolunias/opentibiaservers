import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-launch');
}

export default function Tibia81SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-launch" />;
}
