import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-evo-launch');
}

export default function Tibia14EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-evo-launch" />;
}
