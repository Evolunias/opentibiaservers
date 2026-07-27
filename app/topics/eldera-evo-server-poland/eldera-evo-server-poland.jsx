import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-poland');
}

export default function ElderaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-poland" />;
}
