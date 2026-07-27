import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-evo-servers');
}

export default function Thaisot15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-evo-servers" />;
}
