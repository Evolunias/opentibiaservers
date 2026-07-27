import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-retro-season');
}

export default function Tibia13RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-retro-season" />;
}
