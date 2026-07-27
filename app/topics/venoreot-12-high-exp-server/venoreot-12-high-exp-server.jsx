import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-high-exp-server');
}

export default function Venoreot12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-high-exp-server" />;
}
