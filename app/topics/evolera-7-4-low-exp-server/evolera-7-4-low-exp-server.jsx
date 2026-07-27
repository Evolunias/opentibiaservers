import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-low-exp-server');
}

export default function Evolera74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-low-exp-server" />;
}
