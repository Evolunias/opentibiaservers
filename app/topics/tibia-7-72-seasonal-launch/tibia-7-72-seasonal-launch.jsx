import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-seasonal-launch');
}

export default function Tibia772SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-seasonal-launch" />;
}
