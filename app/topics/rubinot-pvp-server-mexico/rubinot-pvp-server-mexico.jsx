import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-mexico');
}

export default function RubinotPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-mexico" />;
}
