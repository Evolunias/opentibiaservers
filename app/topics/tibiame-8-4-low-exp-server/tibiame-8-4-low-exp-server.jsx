import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-low-exp-server');
}

export default function Tibiame84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-low-exp-server" />;
}
