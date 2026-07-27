import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-evo-server');
}

export default function Nilot13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-evo-server" />;
}
