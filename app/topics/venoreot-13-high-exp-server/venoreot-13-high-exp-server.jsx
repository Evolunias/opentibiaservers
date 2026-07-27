import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-high-exp-server');
}

export default function Venoreot13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-high-exp-server" />;
}
