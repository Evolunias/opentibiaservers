import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-launch');
}

export default function Tibia11HighExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-launch" />;
}
