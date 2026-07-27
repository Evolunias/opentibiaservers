import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-0-high-exp-server');
}

export default function Evolera80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-0-high-exp-server" />;
}
