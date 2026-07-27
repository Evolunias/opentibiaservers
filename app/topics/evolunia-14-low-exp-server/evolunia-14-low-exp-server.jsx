import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-low-exp-server');
}

export default function Evolunia14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-low-exp-server" />;
}
