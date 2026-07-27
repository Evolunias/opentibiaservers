import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-low-exp-server');
}

export default function Tibiame96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-low-exp-server" />;
}
