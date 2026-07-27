import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-high-exp-server');
}

export default function Carlinot15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-high-exp-server" />;
}
