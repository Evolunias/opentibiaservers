import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-germany');
}

export default function AureraGlobalEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-germany" />;
}
