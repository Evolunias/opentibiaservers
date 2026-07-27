import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-high-exp-server');
}

export default function Evolera76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-high-exp-server" />;
}
