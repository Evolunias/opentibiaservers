import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-pvpe-server');
}

export default function Thaisot14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-pvpe-server" />;
}
