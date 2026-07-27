import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-evo-servers');
}

export default function AureraGlobal11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-evo-servers" />;
}
