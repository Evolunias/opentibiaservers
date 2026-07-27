import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-low-exp-server');
}

export default function Tibiame854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-low-exp-server" />;
}
