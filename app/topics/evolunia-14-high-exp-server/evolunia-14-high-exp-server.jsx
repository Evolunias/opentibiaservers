import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-high-exp-server');
}

export default function Evolunia14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-high-exp-server" />;
}
