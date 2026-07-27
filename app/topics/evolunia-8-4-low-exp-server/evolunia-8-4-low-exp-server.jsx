import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-low-exp-server');
}

export default function Evolunia84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-low-exp-server" />;
}
