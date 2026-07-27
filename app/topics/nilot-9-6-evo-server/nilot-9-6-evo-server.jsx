import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-9-6-evo-server');
}

export default function Nilot96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-9-6-evo-server" />;
}
