import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-low-exp-server');
}

export default function Evolunia81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-low-exp-server" />;
}
