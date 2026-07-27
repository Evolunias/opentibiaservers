import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-evo-servers');
}

export default function Nilot13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-evo-servers" />;
}
