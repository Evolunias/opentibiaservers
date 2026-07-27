import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-argentina');
}

export default function RealeraPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-argentina" />;
}
