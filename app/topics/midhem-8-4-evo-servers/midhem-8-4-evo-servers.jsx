import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-4-evo-servers');
}

export default function Midhem84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-4-evo-servers" />;
}
