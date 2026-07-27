import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-evo-servers');
}

export default function Empirebr76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-evo-servers" />;
}
