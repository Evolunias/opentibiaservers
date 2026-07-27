import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-retro-season');
}

export default function Tibia81RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-retro-season" />;
}
