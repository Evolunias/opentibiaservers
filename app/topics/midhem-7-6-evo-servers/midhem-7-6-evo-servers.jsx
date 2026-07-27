import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-evo-servers');
}

export default function Midhem76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-evo-servers" />;
}
