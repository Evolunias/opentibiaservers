import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-low-exp-server');
}

export default function Thornia1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-low-exp-server" />;
}
