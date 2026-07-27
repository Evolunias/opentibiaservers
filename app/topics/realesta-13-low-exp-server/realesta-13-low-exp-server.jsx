import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-low-exp-server');
}

export default function Realesta13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-low-exp-server" />;
}
