import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-season');
}

export default function Tibia14FreshStartSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-season" />;
}
