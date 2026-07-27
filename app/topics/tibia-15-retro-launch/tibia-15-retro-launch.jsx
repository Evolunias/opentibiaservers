import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-launch');
}

export default function Tibia15RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-launch" />;
}
