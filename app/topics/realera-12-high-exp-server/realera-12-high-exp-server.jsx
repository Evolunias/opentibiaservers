import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-high-exp-server');
}

export default function Realera12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-high-exp-server" />;
}
