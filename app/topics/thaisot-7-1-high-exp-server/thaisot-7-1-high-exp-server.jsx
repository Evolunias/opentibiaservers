import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-1-high-exp-server');
}

export default function Thaisot71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-1-high-exp-server" />;
}
