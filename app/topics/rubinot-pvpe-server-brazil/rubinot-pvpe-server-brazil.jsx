import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-brazil');
}

export default function RubinotPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-brazil" />;
}
