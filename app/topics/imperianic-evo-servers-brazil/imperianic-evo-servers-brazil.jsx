import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-servers-brazil');
}

export default function ImperianicEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-servers-brazil" />;
}
