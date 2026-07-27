import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-low-exp-server');
}

export default function Realesta12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-low-exp-server" />;
}
