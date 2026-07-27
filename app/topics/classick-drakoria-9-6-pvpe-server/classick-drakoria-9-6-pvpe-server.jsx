import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-pvpe-server');
}

export default function ClassickDrakoria96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-pvpe-server" />;
}
