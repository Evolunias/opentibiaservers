import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-usa');
}

export default function ClassickDrakoriaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-usa" />;
}
