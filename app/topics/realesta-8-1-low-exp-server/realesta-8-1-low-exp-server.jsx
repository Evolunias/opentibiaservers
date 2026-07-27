import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-low-exp-server');
}

export default function Realesta81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-low-exp-server" />;
}
