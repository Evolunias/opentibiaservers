import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-south-america');
}

export default function RubinotPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-south-america" />;
}
