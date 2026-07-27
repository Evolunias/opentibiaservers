import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-6-pvpe-server');
}

export default function Saintsot86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-6-pvpe-server" />;
}
