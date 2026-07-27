import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-poland');
}

export default function RubinotNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-poland" />;
}
