import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-high-exp-server');
}

export default function Tibiame74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-high-exp-server" />;
}
