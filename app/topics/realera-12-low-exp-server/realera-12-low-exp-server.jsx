import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-low-exp-server');
}

export default function Realera12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-low-exp-server" />;
}
