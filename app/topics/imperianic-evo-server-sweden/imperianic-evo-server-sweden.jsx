import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-sweden');
}

export default function ImperianicEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-sweden" />;
}
