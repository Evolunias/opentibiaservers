import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-1-high-exp-server');
}

export default function Thornia81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-1-high-exp-server" />;
}
