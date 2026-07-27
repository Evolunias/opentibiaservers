import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-no-reset-launch');
}

export default function Tibia74NoResetLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-no-reset-launch" />;
}
