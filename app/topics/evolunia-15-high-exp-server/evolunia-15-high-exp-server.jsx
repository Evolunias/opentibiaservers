import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-high-exp-server');
}

export default function Evolunia15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-high-exp-server" />;
}
