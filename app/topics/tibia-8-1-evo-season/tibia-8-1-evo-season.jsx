import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-season');
}

export default function Tibia81EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-season" />;
}
