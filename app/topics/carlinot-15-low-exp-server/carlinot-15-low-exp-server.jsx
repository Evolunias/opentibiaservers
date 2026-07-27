import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-low-exp-server');
}

export default function Carlinot15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-low-exp-server" />;
}
