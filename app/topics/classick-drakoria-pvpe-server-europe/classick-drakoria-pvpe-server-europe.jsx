import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-europe');
}

export default function ClassickDrakoriaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-europe" />;
}
