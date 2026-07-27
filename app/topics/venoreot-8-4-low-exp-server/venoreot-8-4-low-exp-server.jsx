import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-low-exp-server');
}

export default function Venoreot84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-low-exp-server" />;
}
