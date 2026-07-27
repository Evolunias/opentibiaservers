import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-usa');
}

export default function RealestaPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-usa" />;
}
