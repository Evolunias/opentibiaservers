import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-evo-server');
}

export default function Nilot14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-evo-server" />;
}
