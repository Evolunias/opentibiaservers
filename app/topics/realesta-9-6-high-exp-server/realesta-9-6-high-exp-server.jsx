import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-high-exp-server');
}

export default function Realesta96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-high-exp-server" />;
}
