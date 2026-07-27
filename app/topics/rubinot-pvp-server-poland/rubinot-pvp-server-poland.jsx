import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-poland');
}

export default function RubinotPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-poland" />;
}
