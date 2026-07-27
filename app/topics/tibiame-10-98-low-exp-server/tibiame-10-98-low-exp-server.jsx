import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-low-exp-server');
}

export default function Tibiame1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-low-exp-server" />;
}
