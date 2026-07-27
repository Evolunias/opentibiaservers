import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-low-exp-server');
}

export default function Evolunia76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-low-exp-server" />;
}
