import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-poland');
}

export default function AureraGlobalEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-poland" />;
}
