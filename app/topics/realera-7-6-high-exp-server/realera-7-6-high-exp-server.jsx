import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-high-exp-server');
}

export default function Realera76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-high-exp-server" />;
}
