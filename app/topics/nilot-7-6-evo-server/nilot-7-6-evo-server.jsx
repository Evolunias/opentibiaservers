import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-6-evo-server');
}

export default function Nilot76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-6-evo-server" />;
}
