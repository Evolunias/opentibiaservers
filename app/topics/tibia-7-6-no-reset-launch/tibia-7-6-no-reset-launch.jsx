import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-no-reset-launch');
}

export default function Tibia76NoResetLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-no-reset-launch" />;
}
