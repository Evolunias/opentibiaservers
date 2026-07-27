import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-france');
}

export default function AlasteraEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-france" />;
}
