import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-retro-season');
}

export default function Tibia76RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-retro-season" />;
}
