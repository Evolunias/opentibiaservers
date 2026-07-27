import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-low-exp-server');
}

export default function Carlinot12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-low-exp-server" />;
}
