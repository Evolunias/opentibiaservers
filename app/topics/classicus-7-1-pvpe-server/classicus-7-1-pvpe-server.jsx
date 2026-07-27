import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-1-pvpe-server');
}

export default function Classicus71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-1-pvpe-server" />;
}
