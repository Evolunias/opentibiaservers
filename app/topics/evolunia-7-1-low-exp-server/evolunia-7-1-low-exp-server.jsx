import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-low-exp-server');
}

export default function Evolunia71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-low-exp-server" />;
}
