import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-retro-launch');
}

export default function Tibia71RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-retro-launch" />;
}
