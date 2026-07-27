import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-germany');
}

export default function RubinotPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-germany" />;
}
