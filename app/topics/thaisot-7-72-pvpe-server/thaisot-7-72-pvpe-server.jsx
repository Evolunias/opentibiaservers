import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-72-pvpe-server');
}

export default function Thaisot772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-72-pvpe-server" />;
}
