import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-launch');
}

export default function Tibia11SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-launch" />;
}
