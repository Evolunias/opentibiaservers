import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-13-high-exp-server');
}

export default function Marolaot13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-13-high-exp-server" />;
}
