import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-low-exp-server');
}

export default function Evolunia772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-low-exp-server" />;
}
