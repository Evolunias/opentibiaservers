import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-low-exp-server');
}

export default function Venoreot11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-low-exp-server" />;
}
