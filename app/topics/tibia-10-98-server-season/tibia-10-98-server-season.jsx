import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-season');
}

export default function Tibia1098ServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-season" />;
}
