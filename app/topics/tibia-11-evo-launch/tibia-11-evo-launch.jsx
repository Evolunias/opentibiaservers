import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-launch');
}

export default function Tibia11EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-launch" />;
}
