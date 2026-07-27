import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-low-exp-server');
}

export default function Evolera13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-low-exp-server" />;
}
