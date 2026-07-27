import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-evo-servers');
}

export default function Midhem96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-evo-servers" />;
}
