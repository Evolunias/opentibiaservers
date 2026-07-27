import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-low-exp-server');
}

export default function Marolaot11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-low-exp-server" />;
}
