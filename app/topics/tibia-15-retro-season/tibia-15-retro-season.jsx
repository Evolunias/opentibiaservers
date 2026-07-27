import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-retro-season');
}

export default function Tibia15RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-retro-season" />;
}
