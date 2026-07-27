import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-high-exp-server');
}

export default function Thaisot96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-high-exp-server" />;
}
