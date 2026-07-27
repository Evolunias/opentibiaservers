import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-high-exp-server');
}

export default function Tibiame14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-high-exp-server" />;
}
