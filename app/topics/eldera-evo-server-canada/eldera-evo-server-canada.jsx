import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-canada');
}

export default function ElderaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-canada" />;
}
