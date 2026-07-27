import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-low-exp-server');
}

export default function Venoreot100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-low-exp-server" />;
}
