import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-low-exp-server');
}

export default function Realera84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-low-exp-server" />;
}
