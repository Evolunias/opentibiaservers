import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-high-exp-launch');
}

export default function Tibia854HighExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-high-exp-launch" />;
}
