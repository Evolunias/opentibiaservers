import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-low-exp-server');
}

export default function Tibiame76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-low-exp-server" />;
}
