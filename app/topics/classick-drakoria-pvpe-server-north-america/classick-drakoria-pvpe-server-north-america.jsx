import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-north-america');
}

export default function ClassickDrakoriaPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-north-america" />;
}
