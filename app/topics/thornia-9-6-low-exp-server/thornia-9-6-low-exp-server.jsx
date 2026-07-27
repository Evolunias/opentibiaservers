import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-low-exp-server');
}

export default function Thornia96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-low-exp-server" />;
}
