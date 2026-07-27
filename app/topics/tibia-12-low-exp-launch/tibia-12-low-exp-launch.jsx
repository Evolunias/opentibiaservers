import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-launch');
}

export default function Tibia12LowExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-launch" />;
}
