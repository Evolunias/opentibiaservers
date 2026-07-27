import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-low-exp-server');
}

export default function Thornia13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-low-exp-server" />;
}
