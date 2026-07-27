import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-1-evo-servers');
}

export default function Midhem81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-1-evo-servers" />;
}
