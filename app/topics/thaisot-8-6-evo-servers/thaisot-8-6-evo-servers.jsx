import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-6-evo-servers');
}

export default function Thaisot86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-6-evo-servers" />;
}
