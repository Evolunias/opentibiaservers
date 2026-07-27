import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-high-exp-server');
}

export default function Evolunia74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-high-exp-server" />;
}
