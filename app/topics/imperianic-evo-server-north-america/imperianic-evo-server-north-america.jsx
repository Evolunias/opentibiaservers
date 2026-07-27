import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-north-america');
}

export default function ImperianicEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-north-america" />;
}
