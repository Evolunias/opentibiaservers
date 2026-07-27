import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-pvpe-server');
}

export default function Thaisot15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-pvpe-server" />;
}
