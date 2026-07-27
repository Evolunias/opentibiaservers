import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-no-reset-launch');
}

export default function Tibia84NoResetLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-no-reset-launch" />;
}
