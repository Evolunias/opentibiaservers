import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-low-exp-launch');
}

export default function Tibia772LowExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-low-exp-launch" />;
}
