import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-high-exp-server');
}

export default function Tibiame96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-high-exp-server" />;
}
