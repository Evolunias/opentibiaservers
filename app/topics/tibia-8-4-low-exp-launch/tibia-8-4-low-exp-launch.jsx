import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-low-exp-launch');
}

export default function Tibia84LowExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-low-exp-launch" />;
}
