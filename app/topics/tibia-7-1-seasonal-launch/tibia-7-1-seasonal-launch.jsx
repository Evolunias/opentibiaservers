import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-launch');
}

export default function Tibia71SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-launch" />;
}
