import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-uk');
}

export default function AureraGlobalEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-uk" />;
}
