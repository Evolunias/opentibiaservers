import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-retro-season');
}

export default function Tibia74RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-retro-season" />;
}
