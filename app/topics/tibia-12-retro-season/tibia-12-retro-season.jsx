import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-retro-season');
}

export default function Tibia12RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-retro-season" />;
}
