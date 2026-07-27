import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-launch');
}

export default function Tibia15HighExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-launch" />;
}
