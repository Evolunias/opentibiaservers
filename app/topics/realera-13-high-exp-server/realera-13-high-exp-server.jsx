import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-high-exp-server');
}

export default function Realera13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-high-exp-server" />;
}
