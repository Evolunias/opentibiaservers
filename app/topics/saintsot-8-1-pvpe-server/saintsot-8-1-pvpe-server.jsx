import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-1-pvpe-server');
}

export default function Saintsot81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-1-pvpe-server" />;
}
