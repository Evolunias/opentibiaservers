import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-evo-launch');
}

export default function Tibia12EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-evo-launch" />;
}
