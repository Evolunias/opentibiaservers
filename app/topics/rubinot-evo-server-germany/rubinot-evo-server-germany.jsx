import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-germany');
}

export default function RubinotEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-germany" />;
}
