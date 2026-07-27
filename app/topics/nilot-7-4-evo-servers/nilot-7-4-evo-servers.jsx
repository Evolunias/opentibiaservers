import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-4-evo-servers');
}

export default function Nilot74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-4-evo-servers" />;
}
