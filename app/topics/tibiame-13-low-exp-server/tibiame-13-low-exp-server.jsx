import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-low-exp-server');
}

export default function Tibiame13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-low-exp-server" />;
}
