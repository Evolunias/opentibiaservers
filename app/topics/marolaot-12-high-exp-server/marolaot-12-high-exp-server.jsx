import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-high-exp-server');
}

export default function Marolaot12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-high-exp-server" />;
}
