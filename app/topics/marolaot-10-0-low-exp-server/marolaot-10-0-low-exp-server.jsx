import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-low-exp-server');
}

export default function Marolaot100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-low-exp-server" />;
}
