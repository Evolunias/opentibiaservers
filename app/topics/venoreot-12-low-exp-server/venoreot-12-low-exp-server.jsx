import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-low-exp-server');
}

export default function Venoreot12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-low-exp-server" />;
}
