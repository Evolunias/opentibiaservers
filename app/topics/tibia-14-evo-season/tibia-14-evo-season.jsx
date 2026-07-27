import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-evo-season');
}

export default function Tibia14EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-evo-season" />;
}
