import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-season');
}

export default function Tibia11RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-season" />;
}
