import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-europe');
}

export default function MiracleEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-europe" />;
}
