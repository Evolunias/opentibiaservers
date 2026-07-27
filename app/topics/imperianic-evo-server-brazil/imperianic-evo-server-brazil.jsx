import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-brazil');
}

export default function ImperianicEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-brazil" />;
}
