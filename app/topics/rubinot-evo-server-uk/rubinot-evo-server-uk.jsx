import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-uk');
}

export default function RubinotEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-uk" />;
}
