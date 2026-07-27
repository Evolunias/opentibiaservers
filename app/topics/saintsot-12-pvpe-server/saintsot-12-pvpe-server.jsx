import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-pvpe-server');
}

export default function Saintsot12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-pvpe-server" />;
}
