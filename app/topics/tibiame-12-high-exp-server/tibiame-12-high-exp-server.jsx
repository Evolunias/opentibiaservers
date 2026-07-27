import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-high-exp-server');
}

export default function Tibiame12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-high-exp-server" />;
}
