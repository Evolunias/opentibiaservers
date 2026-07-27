import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-low-exp-server');
}

export default function Evolera11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-low-exp-server" />;
}
