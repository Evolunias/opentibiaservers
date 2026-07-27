import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-evo-servers');
}

export default function Empirebr84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-evo-servers" />;
}
