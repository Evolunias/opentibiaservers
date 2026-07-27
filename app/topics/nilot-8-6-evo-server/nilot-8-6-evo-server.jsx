import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-6-evo-server');
}

export default function Nilot86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-6-evo-server" />;
}
