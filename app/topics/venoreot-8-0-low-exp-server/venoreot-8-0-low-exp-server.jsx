import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-0-low-exp-server');
}

export default function Venoreot80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-0-low-exp-server" />;
}
