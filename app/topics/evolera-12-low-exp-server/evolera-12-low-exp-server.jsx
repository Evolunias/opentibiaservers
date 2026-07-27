import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-low-exp-server');
}

export default function Evolera12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-low-exp-server" />;
}
