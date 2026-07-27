import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-high-exp-server');
}

export default function Tibiame13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-high-exp-server" />;
}
