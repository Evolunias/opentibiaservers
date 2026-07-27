import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-low-exp-server');
}

export default function Realesta11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-low-exp-server" />;
}
