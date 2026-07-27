import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-mexico');
}

export default function ClassicusPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-mexico" />;
}
