import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-high-exp-server');
}

export default function Tibiame76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-high-exp-server" />;
}
