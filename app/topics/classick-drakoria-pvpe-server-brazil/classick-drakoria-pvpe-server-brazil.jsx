import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-brazil');
}

export default function ClassickDrakoriaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-brazil" />;
}
