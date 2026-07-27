import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-0-evo-servers');
}

export default function AureraGlobal80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-0-evo-servers" />;
}
