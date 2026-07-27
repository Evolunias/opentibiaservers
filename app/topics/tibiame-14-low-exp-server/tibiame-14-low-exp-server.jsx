import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-low-exp-server');
}

export default function Tibiame14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-low-exp-server" />;
}
