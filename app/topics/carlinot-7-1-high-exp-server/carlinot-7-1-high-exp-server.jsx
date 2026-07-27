import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-high-exp-server');
}

export default function Carlinot71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-high-exp-server" />;
}
