import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-6-low-exp-server');
}

export default function Carlinot76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-6-low-exp-server" />;
}
