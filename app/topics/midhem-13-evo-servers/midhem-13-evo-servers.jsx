import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-evo-servers');
}

export default function Midhem13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-evo-servers" />;
}
