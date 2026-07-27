import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-north-america');
}

export default function ClassicusPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-north-america" />;
}
