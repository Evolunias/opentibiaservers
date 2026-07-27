import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-retro-launch');
}

export default function Tibia854RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-retro-launch" />;
}
