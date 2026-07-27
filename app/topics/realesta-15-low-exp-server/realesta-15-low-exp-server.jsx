import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-low-exp-server');
}

export default function Realesta15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-low-exp-server" />;
}
