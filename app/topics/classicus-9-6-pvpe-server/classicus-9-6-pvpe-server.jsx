import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-pvpe-server');
}

export default function Classicus96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-pvpe-server" />;
}
