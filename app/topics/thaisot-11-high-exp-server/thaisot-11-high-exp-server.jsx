import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-high-exp-server');
}

export default function Thaisot11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-high-exp-server" />;
}
