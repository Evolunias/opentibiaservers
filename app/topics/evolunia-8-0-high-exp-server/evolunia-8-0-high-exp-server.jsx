import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-high-exp-server');
}

export default function Evolunia80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-high-exp-server" />;
}
