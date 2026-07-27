import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-0-evo-servers');
}

export default function Thaisot80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-0-evo-servers" />;
}
