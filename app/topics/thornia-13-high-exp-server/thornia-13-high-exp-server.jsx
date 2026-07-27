import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-high-exp-server');
}

export default function Thornia13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-high-exp-server" />;
}
