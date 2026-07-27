import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-evo-servers');
}

export default function Tibijka84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-evo-servers" />;
}
