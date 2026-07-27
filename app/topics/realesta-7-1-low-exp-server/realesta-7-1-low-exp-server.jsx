import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-low-exp-server');
}

export default function Realesta71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-low-exp-server" />;
}
