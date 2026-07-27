import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-season');
}

export default function Tibia74ServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-season" />;
}
