import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-evo-launch');
}

export default function Tibia854EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-evo-launch" />;
}
