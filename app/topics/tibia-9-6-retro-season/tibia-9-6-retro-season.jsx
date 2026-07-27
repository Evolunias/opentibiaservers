import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-season');
}

export default function Tibia96RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-season" />;
}
