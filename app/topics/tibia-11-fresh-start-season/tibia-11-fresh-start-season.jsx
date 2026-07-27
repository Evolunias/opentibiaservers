import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-season');
}

export default function Tibia11FreshStartSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-season" />;
}
