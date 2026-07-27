import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-high-exp-server');
}

export default function Realesta81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-high-exp-server" />;
}
