import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-low-exp-server');
}

export default function Evolera86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-low-exp-server" />;
}
