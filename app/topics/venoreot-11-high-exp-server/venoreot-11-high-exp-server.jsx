import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-high-exp-server');
}

export default function Venoreot11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-high-exp-server" />;
}
