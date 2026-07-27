import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-pvpe-server');
}

export default function Saintsot15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-pvpe-server" />;
}
