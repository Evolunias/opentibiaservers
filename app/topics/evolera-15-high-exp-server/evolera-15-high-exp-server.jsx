import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-high-exp-server');
}

export default function Evolera15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-high-exp-server" />;
}
