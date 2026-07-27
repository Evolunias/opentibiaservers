import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-poland');
}

export default function ClassicusPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-poland" />;
}
