import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-brazil');
}

export default function ClassicusPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-brazil" />;
}
