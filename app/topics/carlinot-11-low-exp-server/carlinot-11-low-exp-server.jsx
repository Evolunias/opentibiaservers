import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-low-exp-server');
}

export default function Carlinot11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-low-exp-server" />;
}
