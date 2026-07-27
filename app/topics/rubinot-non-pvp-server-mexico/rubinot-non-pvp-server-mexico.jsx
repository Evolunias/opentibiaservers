import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-mexico');
}

export default function RubinotNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-mexico" />;
}
