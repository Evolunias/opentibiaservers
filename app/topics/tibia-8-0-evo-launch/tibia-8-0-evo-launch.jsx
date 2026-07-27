import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-evo-launch');
}

export default function Tibia80EvoLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-evo-launch" />;
}
