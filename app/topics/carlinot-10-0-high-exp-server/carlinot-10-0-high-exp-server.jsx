import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-high-exp-server');
}

export default function Carlinot100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-high-exp-server" />;
}
