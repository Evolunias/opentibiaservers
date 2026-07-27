import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-evo-launch');
}

export default function Tibia76EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-evo-launch" />;
}
