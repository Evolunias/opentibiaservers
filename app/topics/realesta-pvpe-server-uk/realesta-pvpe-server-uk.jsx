import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-uk');
}

export default function RealestaPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-uk" />;
}
