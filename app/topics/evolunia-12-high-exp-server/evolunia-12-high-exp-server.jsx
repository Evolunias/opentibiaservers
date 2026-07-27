import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-high-exp-server');
}

export default function Evolunia12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-high-exp-server" />;
}
