import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-high-exp-server');
}

export default function Thaisot84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-high-exp-server" />;
}
