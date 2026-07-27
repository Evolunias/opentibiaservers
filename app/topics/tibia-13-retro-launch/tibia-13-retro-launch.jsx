import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-retro-launch');
}

export default function Tibia13RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-retro-launch" />;
}
