import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-launch');
}

export default function Tibia96SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-launch" />;
}
