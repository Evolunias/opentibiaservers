import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-pvpe-server');
}

export default function Classicus84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-pvpe-server" />;
}
