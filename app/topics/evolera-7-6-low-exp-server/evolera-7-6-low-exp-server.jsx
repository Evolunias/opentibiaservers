import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-low-exp-server');
}

export default function Evolera76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-low-exp-server" />;
}
