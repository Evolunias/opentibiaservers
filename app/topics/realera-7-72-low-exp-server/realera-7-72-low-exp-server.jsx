import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-72-low-exp-server');
}

export default function Realera772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-72-low-exp-server" />;
}
