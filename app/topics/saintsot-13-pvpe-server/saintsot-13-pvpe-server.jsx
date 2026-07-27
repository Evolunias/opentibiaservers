import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-13-pvpe-server');
}

export default function Saintsot13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-13-pvpe-server" />;
}
