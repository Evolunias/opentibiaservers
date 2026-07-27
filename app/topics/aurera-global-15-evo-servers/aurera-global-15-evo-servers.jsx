import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-evo-servers');
}

export default function AureraGlobal15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-evo-servers" />;
}
