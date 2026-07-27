import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-4-high-exp-server');
}

export default function Realesta84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-4-high-exp-server" />;
}
