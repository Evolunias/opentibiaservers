import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-high-exp-server');
}

export default function Evolunia13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-high-exp-server" />;
}
