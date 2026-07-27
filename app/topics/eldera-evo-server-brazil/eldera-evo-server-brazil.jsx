import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-brazil');
}

export default function ElderaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-brazil" />;
}
