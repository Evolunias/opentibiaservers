import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-low-exp-server');
}

export default function Tibiame100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-low-exp-server" />;
}
