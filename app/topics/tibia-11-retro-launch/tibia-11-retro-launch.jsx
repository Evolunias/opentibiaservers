import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-launch');
}

export default function Tibia11RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-launch" />;
}
