import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-evo-server');
}

export default function Nilot81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-evo-server" />;
}
