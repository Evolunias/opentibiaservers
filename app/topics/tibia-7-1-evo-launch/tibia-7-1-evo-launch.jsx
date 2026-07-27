import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-evo-launch');
}

export default function Tibia71EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-evo-launch" />;
}
