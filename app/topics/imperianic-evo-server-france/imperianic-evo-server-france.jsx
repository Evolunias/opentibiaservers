import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-france');
}

export default function ImperianicEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-france" />;
}
