import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-evo-servers');
}

export default function Nilot100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-evo-servers" />;
}
