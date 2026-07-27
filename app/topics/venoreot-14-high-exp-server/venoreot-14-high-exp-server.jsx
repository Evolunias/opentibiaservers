import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-high-exp-server');
}

export default function Venoreot14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-high-exp-server" />;
}
