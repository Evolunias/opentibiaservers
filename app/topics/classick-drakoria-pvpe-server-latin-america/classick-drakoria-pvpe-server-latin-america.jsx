import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-latin-america');
}

export default function ClassickDrakoriaPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-latin-america" />;
}
