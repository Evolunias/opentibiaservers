import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-low-exp-server');
}

export default function Evolunia100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-low-exp-server" />;
}
