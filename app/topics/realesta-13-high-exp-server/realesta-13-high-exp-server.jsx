import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-high-exp-server');
}

export default function Realesta13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-high-exp-server" />;
}
