import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-high-exp-server');
}

export default function Marolaot15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-high-exp-server" />;
}
