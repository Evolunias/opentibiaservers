import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-0-evo-server');
}

export default function Nilot80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-0-evo-server" />;
}
