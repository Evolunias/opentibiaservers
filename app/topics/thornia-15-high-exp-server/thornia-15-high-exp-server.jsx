import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-high-exp-server');
}

export default function Thornia15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-high-exp-server" />;
}
