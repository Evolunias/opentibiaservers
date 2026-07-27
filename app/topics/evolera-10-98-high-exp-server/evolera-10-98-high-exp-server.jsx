import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-98-high-exp-server');
}

export default function Evolera1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-98-high-exp-server" />;
}
