import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-servers-poland');
}

export default function RubinotEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-servers-poland" />;
}
