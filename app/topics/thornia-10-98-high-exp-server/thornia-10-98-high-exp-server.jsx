import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-high-exp-server');
}

export default function Thornia1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-high-exp-server" />;
}
