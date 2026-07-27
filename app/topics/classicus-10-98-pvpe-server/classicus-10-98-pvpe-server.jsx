import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-98-pvpe-server');
}

export default function Classicus1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-98-pvpe-server" />;
}
