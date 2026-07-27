import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-low-exp-server');
}

export default function Venoreot14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-low-exp-server" />;
}
