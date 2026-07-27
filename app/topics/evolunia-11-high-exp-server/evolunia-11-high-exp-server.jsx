import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-high-exp-server');
}

export default function Evolunia11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-high-exp-server" />;
}
