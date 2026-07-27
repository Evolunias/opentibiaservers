import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-high-exp-server');
}

export default function Realera96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-high-exp-server" />;
}
