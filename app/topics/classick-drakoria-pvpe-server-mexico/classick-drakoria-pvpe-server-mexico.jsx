import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-mexico');
}

export default function ClassickDrakoriaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-mexico" />;
}
