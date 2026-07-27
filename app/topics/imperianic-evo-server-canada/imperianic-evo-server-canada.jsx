import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-canada');
}

export default function ImperianicEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-canada" />;
}
