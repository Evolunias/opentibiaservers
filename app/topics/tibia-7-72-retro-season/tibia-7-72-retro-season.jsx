import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-retro-season');
}

export default function Tibia772RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-retro-season" />;
}
