import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-pvpe-server');
}

export default function Classicus12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-pvpe-server" />;
}
