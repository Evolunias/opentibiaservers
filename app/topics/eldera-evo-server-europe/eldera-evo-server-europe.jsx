import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-europe');
}

export default function ElderaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-europe" />;
}
