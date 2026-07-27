import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-evo-servers');
}

export default function Midhem12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-evo-servers" />;
}
