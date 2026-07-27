import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-launch');
}

export default function Tibia14RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-launch" />;
}
