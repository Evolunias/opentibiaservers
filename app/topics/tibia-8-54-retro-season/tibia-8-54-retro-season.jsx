import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-retro-season');
}

export default function Tibia854RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-retro-season" />;
}
