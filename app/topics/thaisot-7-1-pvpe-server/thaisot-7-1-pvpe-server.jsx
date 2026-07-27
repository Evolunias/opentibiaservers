import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-1-pvpe-server');
}

export default function Thaisot71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-1-pvpe-server" />;
}
