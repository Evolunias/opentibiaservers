import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-argentina');
}

export default function RubinotPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-argentina" />;
}
