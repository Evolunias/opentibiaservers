import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-mexico');
}

export default function CarlinotHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-mexico" />;
}
