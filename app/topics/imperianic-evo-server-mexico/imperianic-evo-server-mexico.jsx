import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-mexico');
}

export default function ImperianicEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-mexico" />;
}
