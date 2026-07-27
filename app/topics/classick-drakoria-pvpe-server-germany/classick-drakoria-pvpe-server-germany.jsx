import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-germany');
}

export default function ClassickDrakoriaPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-germany" />;
}
