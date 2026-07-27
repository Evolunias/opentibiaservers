import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-season');
}

export default function Tibia14RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-season" />;
}
