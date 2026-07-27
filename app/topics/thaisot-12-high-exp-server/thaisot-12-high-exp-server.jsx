import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-high-exp-server');
}

export default function Thaisot12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-high-exp-server" />;
}
