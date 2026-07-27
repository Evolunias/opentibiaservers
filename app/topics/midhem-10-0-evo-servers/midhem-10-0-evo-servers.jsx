import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-evo-servers');
}

export default function Midhem100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-evo-servers" />;
}
