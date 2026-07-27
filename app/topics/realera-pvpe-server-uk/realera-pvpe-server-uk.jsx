import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-uk');
}

export default function RealeraPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-uk" />;
}
