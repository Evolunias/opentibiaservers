import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-fresh-start-season');
}

export default function Tibia86FreshStartSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-fresh-start-season" />;
}
