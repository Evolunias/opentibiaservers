import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-98-pvpe-server');
}

export default function Thaisot1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-98-pvpe-server" />;
}
