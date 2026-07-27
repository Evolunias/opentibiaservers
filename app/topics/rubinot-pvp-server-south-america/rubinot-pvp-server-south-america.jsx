import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-south-america');
}

export default function RubinotPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-south-america" />;
}
