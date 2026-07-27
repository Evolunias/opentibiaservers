import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-low-exp-server');
}

export default function Tibiame80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-low-exp-server" />;
}
