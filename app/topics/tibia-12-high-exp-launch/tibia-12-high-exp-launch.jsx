import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-launch');
}

export default function Tibia12HighExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-launch" />;
}
