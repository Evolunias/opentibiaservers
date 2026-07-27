import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-france');
}

export default function TibiantisEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-france" />;
}
