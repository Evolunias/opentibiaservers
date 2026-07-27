import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-high-exp-server');
}

export default function Realera81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-high-exp-server" />;
}
