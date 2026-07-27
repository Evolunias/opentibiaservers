import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-high-exp-server');
}

export default function Realera14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-high-exp-server" />;
}
