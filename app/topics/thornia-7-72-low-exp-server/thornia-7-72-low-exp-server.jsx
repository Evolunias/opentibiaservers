import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-low-exp-server');
}

export default function Thornia772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-low-exp-server" />;
}
