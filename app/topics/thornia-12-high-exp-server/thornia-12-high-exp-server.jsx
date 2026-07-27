import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-high-exp-server');
}

export default function Thornia12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-high-exp-server" />;
}
