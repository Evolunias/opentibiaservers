import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-low-exp-server');
}

export default function Marolaot12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-low-exp-server" />;
}
