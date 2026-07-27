import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-evo-launch');
}

export default function Tibia100EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-evo-launch" />;
}
