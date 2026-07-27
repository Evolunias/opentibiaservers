import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-low-exp-server');
}

export default function Realesta74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-low-exp-server" />;
}
