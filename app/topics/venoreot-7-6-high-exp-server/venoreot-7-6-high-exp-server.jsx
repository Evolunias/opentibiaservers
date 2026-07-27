import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-6-high-exp-server');
}

export default function Venoreot76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-6-high-exp-server" />;
}
