import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-evo-servers');
}

export default function Empirebr13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-evo-servers" />;
}
