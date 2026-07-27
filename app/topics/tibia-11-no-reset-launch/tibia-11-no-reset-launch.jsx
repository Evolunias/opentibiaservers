import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-launch');
}

export default function Tibia11NoResetLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-launch" />;
}
