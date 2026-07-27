import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-pvpe-server');
}

export default function ClassickDrakoria11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-pvpe-server" />;
}
