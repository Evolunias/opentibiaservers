import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-low-exp-server');
}

export default function Evolera81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-low-exp-server" />;
}
