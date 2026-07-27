import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-low-exp-server');
}

export default function Evolunia13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-low-exp-server" />;
}
