import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-pvpe-server');
}

export default function Classicus772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-pvpe-server" />;
}
