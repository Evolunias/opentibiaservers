import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-high-exp-server');
}

export default function Evolunia84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-high-exp-server" />;
}
