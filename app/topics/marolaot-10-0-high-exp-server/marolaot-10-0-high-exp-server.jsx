import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-high-exp-server');
}

export default function Marolaot100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-high-exp-server" />;
}
