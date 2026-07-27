import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-0-low-exp-server');
}

export default function Thornia100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-0-low-exp-server" />;
}
