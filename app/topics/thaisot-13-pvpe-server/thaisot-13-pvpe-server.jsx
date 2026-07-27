import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-pvpe-server');
}

export default function Thaisot13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-pvpe-server" />;
}
