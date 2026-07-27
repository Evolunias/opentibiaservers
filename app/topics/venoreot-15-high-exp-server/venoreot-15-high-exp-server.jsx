import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-high-exp-server');
}

export default function Venoreot15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-high-exp-server" />;
}
