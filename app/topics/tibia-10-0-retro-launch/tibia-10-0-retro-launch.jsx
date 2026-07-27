import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-retro-launch');
}

export default function Tibia100RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-retro-launch" />;
}
