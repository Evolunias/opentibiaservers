import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-poland');
}

export default function RubinotEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-poland" />;
}
