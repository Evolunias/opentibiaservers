import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-south-america');
}

export default function RubinotNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-south-america" />;
}
