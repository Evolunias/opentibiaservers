import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-launch');
}

export default function Tibia11LowExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-launch" />;
}
