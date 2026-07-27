import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-high-exp-server');
}

export default function Marolaot11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-high-exp-server" />;
}
