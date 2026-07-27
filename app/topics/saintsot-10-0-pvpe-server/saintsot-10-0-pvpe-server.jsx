import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-10-0-pvpe-server');
}

export default function Saintsot100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-10-0-pvpe-server" />;
}
