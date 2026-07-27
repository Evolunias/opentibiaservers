import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-evo-season');
}

export default function Tibia854EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-evo-season" />;
}
