import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-usa');
}

export default function RubinotNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-usa" />;
}
