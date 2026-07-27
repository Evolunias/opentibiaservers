import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-low-exp-server');
}

export default function Evolera100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-low-exp-server" />;
}
