import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-high-exp-server');
}

export default function Venoreot100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-high-exp-server" />;
}
