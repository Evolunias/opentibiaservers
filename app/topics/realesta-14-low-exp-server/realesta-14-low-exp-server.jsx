import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-low-exp-server');
}

export default function Realesta14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-low-exp-server" />;
}
