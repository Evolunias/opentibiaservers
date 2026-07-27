import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-fresh-start-season');
}

export default function Tibia1098FreshStartSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-fresh-start-season" />;
}
