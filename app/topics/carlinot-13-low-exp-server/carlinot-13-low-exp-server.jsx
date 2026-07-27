import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-low-exp-server');
}

export default function Carlinot13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-low-exp-server" />;
}
