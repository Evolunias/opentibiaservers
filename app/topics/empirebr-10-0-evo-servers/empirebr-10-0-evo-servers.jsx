import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-evo-servers');
}

export default function Empirebr100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-evo-servers" />;
}
