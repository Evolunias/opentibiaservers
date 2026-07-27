import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-6-high-exp-server');
}

export default function Evolunia86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-6-high-exp-server" />;
}
