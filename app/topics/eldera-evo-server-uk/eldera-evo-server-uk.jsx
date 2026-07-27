import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-uk');
}

export default function ElderaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-uk" />;
}
