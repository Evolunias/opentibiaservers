import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-argentina');
}

export default function ImperianicEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-argentina" />;
}
