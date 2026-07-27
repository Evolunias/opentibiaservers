import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-retro-season');
}

export default function Tibia71RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-retro-season" />;
}
