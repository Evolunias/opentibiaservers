import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-retro-launch');
}

export default function Tibia80RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-retro-launch" />;
}
