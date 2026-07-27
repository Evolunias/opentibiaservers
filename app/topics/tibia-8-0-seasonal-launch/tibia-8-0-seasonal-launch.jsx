import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-launch');
}

export default function Tibia80SeasonalLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-launch" />;
}
