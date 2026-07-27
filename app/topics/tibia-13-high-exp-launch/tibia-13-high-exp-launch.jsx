import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-launch');
}

export default function Tibia13HighExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-launch" />;
}
