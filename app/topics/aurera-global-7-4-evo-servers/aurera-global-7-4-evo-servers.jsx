import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-4-evo-servers');
}

export default function AureraGlobal74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-4-evo-servers" />;
}
