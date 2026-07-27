import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-high-exp-server');
}

export default function Carlinot81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-high-exp-server" />;
}
