import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-season');
}

export default function Tibia96EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-season" />;
}
