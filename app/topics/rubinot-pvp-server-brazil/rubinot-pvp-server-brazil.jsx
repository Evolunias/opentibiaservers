import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-brazil');
}

export default function RubinotPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-brazil" />;
}
