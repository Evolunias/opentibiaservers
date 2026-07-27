import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-low-exp-server');
}

export default function Marolaot15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-low-exp-server" />;
}
