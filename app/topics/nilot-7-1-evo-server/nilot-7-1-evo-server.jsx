import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-evo-server');
}

export default function Nilot71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-evo-server" />;
}
