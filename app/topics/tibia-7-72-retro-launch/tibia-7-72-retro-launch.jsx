import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-retro-launch');
}

export default function Tibia772RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-retro-launch" />;
}
