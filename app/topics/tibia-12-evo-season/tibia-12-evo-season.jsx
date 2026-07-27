import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-evo-season');
}

export default function Tibia12EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-evo-season" />;
}
