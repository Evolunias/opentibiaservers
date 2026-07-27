import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-servers-usa');
}

export default function ImperianicEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-servers-usa" />;
}
