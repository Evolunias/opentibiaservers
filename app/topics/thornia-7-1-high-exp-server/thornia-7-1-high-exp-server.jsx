import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-1-high-exp-server');
}

export default function Thornia71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-1-high-exp-server" />;
}
