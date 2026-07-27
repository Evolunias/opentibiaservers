import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-high-exp-server');
}

export default function Evolera12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-high-exp-server" />;
}
