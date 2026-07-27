import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-mexico');
}

export default function ElderaEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-mexico" />;
}
