import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-latin-america');
}

export default function ClassicusPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-latin-america" />;
}
