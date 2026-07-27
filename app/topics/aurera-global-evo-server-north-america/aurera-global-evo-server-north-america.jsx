import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-north-america');
}

export default function AureraGlobalEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-north-america" />;
}
