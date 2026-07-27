import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-low-exp-server');
}

export default function Thornia12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-low-exp-server" />;
}
