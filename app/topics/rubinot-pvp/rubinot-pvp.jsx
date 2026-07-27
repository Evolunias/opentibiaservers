import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp');
}

export default function RubinotPvpKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp" />;
}
