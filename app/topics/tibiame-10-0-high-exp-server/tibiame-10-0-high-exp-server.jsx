import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-high-exp-server');
}

export default function Tibiame100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-high-exp-server" />;
}
