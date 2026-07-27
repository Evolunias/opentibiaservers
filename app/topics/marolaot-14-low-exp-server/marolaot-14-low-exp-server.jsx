import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-low-exp-server');
}

export default function Marolaot14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-low-exp-server" />;
}
