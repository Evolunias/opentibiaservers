import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-low-exp-server');
}

export default function Carlinot96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-low-exp-server" />;
}
