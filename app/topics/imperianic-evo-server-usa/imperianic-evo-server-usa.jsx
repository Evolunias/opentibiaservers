import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-usa');
}

export default function ImperianicEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-usa" />;
}
