import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-launch');
}

export default function Tibia15SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-launch" />;
}
