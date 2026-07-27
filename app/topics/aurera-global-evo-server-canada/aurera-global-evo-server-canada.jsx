import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-canada');
}

export default function AureraGlobalEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-canada" />;
}
