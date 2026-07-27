import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-brazil');
}

export default function RubinotPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-brazil" />;
}
