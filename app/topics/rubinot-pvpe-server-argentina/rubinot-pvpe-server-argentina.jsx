import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-argentina');
}

export default function RubinotPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-argentina" />;
}
