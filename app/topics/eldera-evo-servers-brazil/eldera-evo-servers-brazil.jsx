import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-servers-brazil');
}

export default function ElderaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-servers-brazil" />;
}
