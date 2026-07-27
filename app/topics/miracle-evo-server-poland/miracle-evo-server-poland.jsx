import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-poland');
}

export default function MiracleEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-poland" />;
}
