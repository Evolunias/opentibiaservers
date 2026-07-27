import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-low-exp-server');
}

export default function Evolera14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-low-exp-server" />;
}
