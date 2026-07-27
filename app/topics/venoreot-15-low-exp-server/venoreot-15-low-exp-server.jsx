import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-low-exp-server');
}

export default function Venoreot15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-low-exp-server" />;
}
