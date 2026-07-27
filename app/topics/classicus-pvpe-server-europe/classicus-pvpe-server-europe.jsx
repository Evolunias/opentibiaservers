import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-europe');
}

export default function ClassicusPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-europe" />;
}
