import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-low-exp-server');
}

export default function Realesta96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-low-exp-server" />;
}
