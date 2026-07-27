import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-low-exp-server');
}

export default function Evolera84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-low-exp-server" />;
}
