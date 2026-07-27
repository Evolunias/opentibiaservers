import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-low-exp-server');
}

export default function Evolunia12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-low-exp-server" />;
}
