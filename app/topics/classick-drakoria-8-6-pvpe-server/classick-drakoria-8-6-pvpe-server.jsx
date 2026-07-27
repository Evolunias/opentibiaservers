import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-6-pvpe-server');
}

export default function ClassickDrakoria86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-6-pvpe-server" />;
}
