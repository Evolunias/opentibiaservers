import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-argentina');
}

export default function RealestaPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-argentina" />;
}
