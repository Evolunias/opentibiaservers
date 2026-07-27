import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-launch');
}

export default function Tibia74SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-launch" />;
}
