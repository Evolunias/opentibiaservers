import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-high-exp-server');
}

export default function Evolunia96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-high-exp-server" />;
}
