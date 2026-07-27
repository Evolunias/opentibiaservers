import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-high-exp-server');
}

export default function Thaisot74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-high-exp-server" />;
}
