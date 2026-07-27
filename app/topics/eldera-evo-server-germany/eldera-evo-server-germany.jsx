import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-germany');
}

export default function ElderaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-germany" />;
}
