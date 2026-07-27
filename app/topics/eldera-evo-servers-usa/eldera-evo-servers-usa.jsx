import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-servers-usa');
}

export default function ElderaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-servers-usa" />;
}
