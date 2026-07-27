import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-evo-servers');
}

export default function Nilot81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-evo-servers" />;
}
