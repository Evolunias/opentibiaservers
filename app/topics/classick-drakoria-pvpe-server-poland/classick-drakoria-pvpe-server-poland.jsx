import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-poland');
}

export default function ClassickDrakoriaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-poland" />;
}
