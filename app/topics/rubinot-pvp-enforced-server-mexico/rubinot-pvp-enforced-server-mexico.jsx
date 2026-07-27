import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-mexico');
}

export default function RubinotPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-mexico" />;
}
