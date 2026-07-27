import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-retro-season');
}

export default function Tibia86RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-retro-season" />;
}
