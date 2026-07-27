import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvpe-server-brazil');
}

export default function RealestaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvpe-server-brazil" />;
}
