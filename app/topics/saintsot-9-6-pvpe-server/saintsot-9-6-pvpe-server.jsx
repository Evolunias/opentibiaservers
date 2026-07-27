import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-9-6-pvpe-server');
}

export default function Saintsot96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-9-6-pvpe-server" />;
}
