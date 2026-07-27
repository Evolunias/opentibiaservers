import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-uk');
}

export default function ClassicusPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-uk" />;
}
