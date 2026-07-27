import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-low-exp-server');
}

export default function Thornia76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-low-exp-server" />;
}
