import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-europe');
}

export default function AureraGlobalEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-europe" />;
}
