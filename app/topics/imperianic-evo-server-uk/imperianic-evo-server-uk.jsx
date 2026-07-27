import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-uk');
}

export default function ImperianicEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-uk" />;
}
