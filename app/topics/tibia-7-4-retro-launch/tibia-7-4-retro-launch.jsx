import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-retro-launch');
}

export default function Tibia74RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-retro-launch" />;
}
