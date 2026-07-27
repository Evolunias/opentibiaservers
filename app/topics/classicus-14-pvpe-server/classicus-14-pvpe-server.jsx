import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-pvpe-server');
}

export default function Classicus14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-pvpe-server" />;
}
