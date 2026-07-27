import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-high-exp-server');
}

export default function Realesta15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-high-exp-server" />;
}
