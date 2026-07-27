import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-1-evo-servers');
}

export default function AureraGlobal81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-1-evo-servers" />;
}
