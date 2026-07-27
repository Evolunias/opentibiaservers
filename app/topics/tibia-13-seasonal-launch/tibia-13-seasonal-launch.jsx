import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-launch');
}

export default function Tibia13SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-launch" />;
}
