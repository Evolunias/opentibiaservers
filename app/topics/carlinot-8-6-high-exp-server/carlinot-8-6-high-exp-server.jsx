import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-6-high-exp-server');
}

export default function Carlinot86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-6-high-exp-server" />;
}
