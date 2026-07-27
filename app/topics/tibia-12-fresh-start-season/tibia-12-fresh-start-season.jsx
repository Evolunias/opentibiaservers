import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-season');
}

export default function Tibia12FreshStartSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-season" />;
}
