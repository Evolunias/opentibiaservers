import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-argentina');
}

export default function RubinotNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-argentina" />;
}
