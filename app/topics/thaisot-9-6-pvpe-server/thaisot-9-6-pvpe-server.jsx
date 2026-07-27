import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-pvpe-server');
}

export default function Thaisot96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-pvpe-server" />;
}
