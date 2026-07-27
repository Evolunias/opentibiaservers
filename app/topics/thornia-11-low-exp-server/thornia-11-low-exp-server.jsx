import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-low-exp-server');
}

export default function Thornia11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-low-exp-server" />;
}
