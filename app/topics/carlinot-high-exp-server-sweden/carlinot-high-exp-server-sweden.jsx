import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-sweden');
}

export default function CarlinotHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-sweden" />;
}
