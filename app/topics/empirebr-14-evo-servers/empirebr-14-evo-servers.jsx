import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-evo-servers');
}

export default function Empirebr14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-evo-servers" />;
}
