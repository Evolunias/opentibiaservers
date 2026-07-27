import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-high-exp-server');
}

export default function Evolunia76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-high-exp-server" />;
}
