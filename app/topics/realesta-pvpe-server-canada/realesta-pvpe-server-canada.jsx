import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-canada');
}

export default function RealestaPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-canada" />;
}
