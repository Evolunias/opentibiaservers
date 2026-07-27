import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-low-exp-server');
}

export default function Venoreot96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-low-exp-server" />;
}
