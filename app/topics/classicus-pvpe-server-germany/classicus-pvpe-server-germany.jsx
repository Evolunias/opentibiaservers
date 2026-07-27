import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-germany');
}

export default function ClassicusPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-germany" />;
}
