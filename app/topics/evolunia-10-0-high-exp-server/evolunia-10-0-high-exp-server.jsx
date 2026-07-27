import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-high-exp-server');
}

export default function Evolunia100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-high-exp-server" />;
}
