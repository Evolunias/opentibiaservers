import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-launch');
}

export default function Tibia13EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-launch" />;
}
