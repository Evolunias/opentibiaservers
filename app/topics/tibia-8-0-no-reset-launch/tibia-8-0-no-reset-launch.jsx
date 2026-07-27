import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-no-reset-launch');
}

export default function Tibia80NoResetLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-no-reset-launch" />;
}
