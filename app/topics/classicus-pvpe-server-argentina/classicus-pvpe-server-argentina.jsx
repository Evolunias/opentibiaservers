import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-argentina');
}

export default function ClassicusPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-argentina" />;
}
