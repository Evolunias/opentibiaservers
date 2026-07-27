import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-6-low-exp-server');
}

export default function Marolaot86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-6-low-exp-server" />;
}
