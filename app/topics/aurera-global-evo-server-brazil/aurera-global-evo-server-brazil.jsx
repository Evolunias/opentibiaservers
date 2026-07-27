import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-brazil');
}

export default function AureraGlobalEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-brazil" />;
}
