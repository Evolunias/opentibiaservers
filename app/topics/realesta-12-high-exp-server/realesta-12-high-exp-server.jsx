import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-high-exp-server');
}

export default function Realesta12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-high-exp-server" />;
}
