import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-servers-usa');
}

export default function AureraGlobalEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-servers-usa" />;
}
