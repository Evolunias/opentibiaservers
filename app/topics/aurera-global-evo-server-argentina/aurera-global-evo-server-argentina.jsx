import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-argentina');
}

export default function AureraGlobalEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-argentina" />;
}
