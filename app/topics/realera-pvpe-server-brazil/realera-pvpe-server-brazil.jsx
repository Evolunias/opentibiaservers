import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-brazil');
}

export default function RealeraPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-brazil" />;
}
