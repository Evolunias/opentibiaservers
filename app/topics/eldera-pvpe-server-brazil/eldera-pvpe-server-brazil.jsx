import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-brazil');
}

export default function ElderaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-brazil" />;
}
