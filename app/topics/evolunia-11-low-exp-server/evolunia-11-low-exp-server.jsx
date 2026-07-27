import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-low-exp-server');
}

export default function Evolunia11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-low-exp-server" />;
}
