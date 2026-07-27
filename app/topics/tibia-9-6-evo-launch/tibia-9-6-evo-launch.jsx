import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-launch');
}

export default function Tibia96EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-launch" />;
}
