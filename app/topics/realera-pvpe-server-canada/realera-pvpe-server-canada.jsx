import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-canada');
}

export default function RealeraPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-canada" />;
}
