import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-high-exp-server');
}

export default function Marolaot14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-high-exp-server" />;
}
