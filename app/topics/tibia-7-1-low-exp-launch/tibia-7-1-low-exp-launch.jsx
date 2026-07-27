import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-launch');
}

export default function Tibia71LowExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-launch" />;
}
