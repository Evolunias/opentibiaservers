import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-fresh-start-season');
}

export default function Tibia772FreshStartSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-fresh-start-season" />;
}
