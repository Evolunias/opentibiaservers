import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-usa');
}

export default function ElderaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-usa" />;
}
