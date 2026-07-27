import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-low-exp-launch');
}

export default function Tibia74LowExpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-low-exp-launch" />;
}
