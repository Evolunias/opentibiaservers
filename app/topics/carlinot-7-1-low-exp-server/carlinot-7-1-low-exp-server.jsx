import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-low-exp-server');
}

export default function Carlinot71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-low-exp-server" />;
}
