import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-south-america');
}

export default function RubinotEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-south-america" />;
}
