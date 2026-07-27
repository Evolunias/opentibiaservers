import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-high-exp-server');
}

export default function Tibiame854HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-high-exp-server" />;
}
