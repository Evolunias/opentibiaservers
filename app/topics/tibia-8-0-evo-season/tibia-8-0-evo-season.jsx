import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-evo-season');
}

export default function Tibia80EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-evo-season" />;
}
