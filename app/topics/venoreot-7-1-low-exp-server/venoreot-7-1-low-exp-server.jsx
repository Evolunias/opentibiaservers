import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-1-low-exp-server');
}

export default function Venoreot71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-1-low-exp-server" />;
}
