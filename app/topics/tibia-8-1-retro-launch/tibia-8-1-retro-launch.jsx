import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-retro-launch');
}

export default function Tibia81RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-retro-launch" />;
}
