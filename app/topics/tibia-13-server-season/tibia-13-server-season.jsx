import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-season');
}

export default function Tibia13ServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-season" />;
}
