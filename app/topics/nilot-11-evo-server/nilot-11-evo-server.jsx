import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-evo-server');
}

export default function Nilot11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-evo-server" />;
}
