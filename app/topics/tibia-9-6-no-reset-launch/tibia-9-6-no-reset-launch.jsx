import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-no-reset-launch');
}

export default function Tibia96NoResetLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-no-reset-launch" />;
}
