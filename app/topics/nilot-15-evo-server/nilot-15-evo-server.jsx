import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-evo-server');
}

export default function Nilot15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-evo-server" />;
}
