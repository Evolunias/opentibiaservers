import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-high-exp-server');
}

export default function Thornia76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-high-exp-server" />;
}
