import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-98-low-exp-server');
}

export default function Evolera1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-98-low-exp-server" />;
}
