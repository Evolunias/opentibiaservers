import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-1-evo-servers');
}

export default function AureraGlobal71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-1-evo-servers" />;
}
