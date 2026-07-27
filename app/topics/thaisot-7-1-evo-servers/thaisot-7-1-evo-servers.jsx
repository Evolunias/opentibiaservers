import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-1-evo-servers');
}

export default function Thaisot71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-1-evo-servers" />;
}
