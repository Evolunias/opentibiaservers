import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-high-exp-server');
}

export default function Carlinot11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-high-exp-server" />;
}
