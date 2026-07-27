import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-4-evo-server');
}

export default function Nilot74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-4-evo-server" />;
}
