import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-1-low-exp-server');
}

export default function Thornia71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-1-low-exp-server" />;
}
