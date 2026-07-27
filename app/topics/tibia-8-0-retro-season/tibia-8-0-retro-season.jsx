import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-retro-season');
}

export default function Tibia80RetroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-retro-season" />;
}
