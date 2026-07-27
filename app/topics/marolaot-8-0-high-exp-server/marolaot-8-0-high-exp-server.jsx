import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-high-exp-server');
}

export default function Marolaot80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-high-exp-server" />;
}
