import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-pvpe-server');
}

export default function Classicus86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-pvpe-server" />;
}
