import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-98-evo-servers');
}

export default function Empirebr1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-98-evo-servers" />;
}
