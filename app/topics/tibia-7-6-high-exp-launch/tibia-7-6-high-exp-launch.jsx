import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-high-exp-launch');
}

export default function Tibia76HighExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-high-exp-launch" />;
}
