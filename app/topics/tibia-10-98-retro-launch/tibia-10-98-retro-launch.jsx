import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-retro-launch');
}

export default function Tibia1098RetroLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-retro-launch" />;
}
