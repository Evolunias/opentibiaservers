import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-launch');
}

export default function Tibia12NoResetLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-launch" />;
}
