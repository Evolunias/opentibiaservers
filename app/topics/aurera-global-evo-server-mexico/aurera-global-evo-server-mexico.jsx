import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-mexico');
}

export default function AureraGlobalEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-mexico" />;
}
