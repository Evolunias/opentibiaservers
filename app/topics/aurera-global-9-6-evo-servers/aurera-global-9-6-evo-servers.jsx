import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-9-6-evo-servers');
}

export default function AureraGlobal96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-9-6-evo-servers" />;
}
