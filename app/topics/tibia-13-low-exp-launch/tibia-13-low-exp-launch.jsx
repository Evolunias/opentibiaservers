import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-launch');
}

export default function Tibia13LowExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-launch" />;
}
