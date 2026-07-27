import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-evo-season');
}

export default function Tibia15EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-evo-season" />;
}
