import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-evo-season');
}

export default function Tibia772EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-evo-season" />;
}
