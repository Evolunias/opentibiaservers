import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-servers-brazil');
}

export default function AureraGlobalEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-servers-brazil" />;
}
