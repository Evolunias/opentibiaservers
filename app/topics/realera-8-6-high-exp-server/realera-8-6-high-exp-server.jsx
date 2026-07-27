import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-6-high-exp-server');
}

export default function Realera86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-6-high-exp-server" />;
}
