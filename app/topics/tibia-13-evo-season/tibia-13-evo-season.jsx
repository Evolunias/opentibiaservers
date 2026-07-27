import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-season');
}

export default function Tibia13EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-season" />;
}
