import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-fresh-start-season');
}

export default function Tibia13FreshStartSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-fresh-start-season" />;
}
