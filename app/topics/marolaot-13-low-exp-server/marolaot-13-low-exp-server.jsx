import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-13-low-exp-server');
}

export default function Marolaot13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-13-low-exp-server" />;
}
