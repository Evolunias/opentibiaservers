import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-high-exp-server');
}

export default function Tibiame84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-high-exp-server" />;
}
