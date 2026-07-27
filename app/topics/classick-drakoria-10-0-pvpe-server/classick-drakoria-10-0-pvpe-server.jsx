import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-pvpe-server');
}

export default function ClassickDrakoria100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-pvpe-server" />;
}
