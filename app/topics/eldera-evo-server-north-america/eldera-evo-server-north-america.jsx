import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-north-america');
}

export default function ElderaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-north-america" />;
}
