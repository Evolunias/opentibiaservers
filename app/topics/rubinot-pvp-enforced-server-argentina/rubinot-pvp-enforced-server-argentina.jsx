import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-argentina');
}

export default function RubinotPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-argentina" />;
}
