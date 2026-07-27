import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-high-exp-server');
}

export default function Evolera14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-high-exp-server" />;
}
