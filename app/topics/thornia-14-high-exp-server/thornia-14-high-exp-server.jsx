import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-high-exp-server');
}

export default function Thornia14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-high-exp-server" />;
}
