import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-pvpe-server');
}

export default function Classicus11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-pvpe-server" />;
}
