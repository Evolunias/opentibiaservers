import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-high-exp-server');
}

export default function Carlinot13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-high-exp-server" />;
}
