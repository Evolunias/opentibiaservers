import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-evo-servers');
}

export default function Thaisot96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-evo-servers" />;
}
