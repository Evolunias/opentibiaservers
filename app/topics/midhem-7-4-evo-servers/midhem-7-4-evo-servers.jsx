import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-evo-servers');
}

export default function Midhem74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-evo-servers" />;
}
