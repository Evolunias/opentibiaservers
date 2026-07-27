import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-evo-servers');
}

export default function Empirebr74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-evo-servers" />;
}
