import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-germany');
}

export default function RubinotPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-germany" />;
}
