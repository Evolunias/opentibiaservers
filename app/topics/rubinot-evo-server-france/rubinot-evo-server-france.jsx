import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-france');
}

export default function RubinotEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-france" />;
}
