import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-high-exp-launch');
}

export default function Tibia100HighExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-high-exp-launch" />;
}
