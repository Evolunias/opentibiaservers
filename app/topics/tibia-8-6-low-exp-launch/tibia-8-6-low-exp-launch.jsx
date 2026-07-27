import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-low-exp-launch');
}

export default function Tibia86LowExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-low-exp-launch" />;
}
