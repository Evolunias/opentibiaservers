import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-usa');
}

export default function RubinotPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-usa" />;
}
