import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-seasonal-launch');
}

export default function Tibia76SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-seasonal-launch" />;
}
