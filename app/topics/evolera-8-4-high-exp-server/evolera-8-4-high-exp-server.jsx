import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-high-exp-server');
}

export default function Evolera84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-high-exp-server" />;
}
