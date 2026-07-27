import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-launch');
}

export default function Tibia84EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-launch" />;
}
