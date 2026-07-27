import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-argentina');
}

export default function ClassickDrakoriaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-argentina" />;
}
