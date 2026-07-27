import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-argentina');
}

export default function CarlinotHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-argentina" />;
}
