import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-season');
}

export default function Tibia84EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-season" />;
}
