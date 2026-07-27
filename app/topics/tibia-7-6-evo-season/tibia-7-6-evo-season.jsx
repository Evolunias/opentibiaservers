import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-evo-season');
}

export default function Tibia76EvoSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-evo-season" />;
}
