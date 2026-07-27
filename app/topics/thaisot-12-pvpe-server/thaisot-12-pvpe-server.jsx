import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-pvpe-server');
}

export default function Thaisot12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-pvpe-server" />;
}
