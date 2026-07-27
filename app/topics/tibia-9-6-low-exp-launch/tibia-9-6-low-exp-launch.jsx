import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-launch');
}

export default function Tibia96LowExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-launch" />;
}
