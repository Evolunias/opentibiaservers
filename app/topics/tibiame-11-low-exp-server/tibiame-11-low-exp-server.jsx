import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-low-exp-server');
}

export default function Tibiame11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-low-exp-server" />;
}
