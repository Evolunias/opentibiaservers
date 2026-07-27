import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-4-evo-servers');
}

export default function Nilot84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-4-evo-servers" />;
}
