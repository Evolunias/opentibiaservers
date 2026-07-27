import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-low-exp-server');
}

export default function Evolunia96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-low-exp-server" />;
}
