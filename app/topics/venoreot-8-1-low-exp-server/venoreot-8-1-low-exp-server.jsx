import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-1-low-exp-server');
}

export default function Venoreot81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-1-low-exp-server" />;
}
