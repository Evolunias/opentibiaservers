import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-evo-servers');
}

export default function Nilot71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-evo-servers" />;
}
