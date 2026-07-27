import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-evo-servers');
}

export default function Thaisot74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-evo-servers" />;
}
