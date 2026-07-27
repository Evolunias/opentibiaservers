import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-6-pvpe-server');
}

export default function Saintsot76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-6-pvpe-server" />;
}
