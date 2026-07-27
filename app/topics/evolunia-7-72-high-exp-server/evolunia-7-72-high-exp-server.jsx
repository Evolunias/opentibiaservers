import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-high-exp-server');
}

export default function Evolunia772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-high-exp-server" />;
}
