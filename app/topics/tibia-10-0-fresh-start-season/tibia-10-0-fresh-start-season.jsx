import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-fresh-start-season');
}

export default function Tibia100FreshStartSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-fresh-start-season" />;
}
