import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-pvpe-server');
}

export default function Saintsot14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-pvpe-server" />;
}
