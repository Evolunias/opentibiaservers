import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-high-exp-server');
}

export default function Thaisot13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-high-exp-server" />;
}
