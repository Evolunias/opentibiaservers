import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-low-exp-server');
}

export default function Tibiame12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-low-exp-server" />;
}
