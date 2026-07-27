import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-launch');
}

export default function Tibia14HighExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-launch" />;
}
