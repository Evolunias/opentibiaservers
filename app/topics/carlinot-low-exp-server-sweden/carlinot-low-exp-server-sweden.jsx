import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-sweden');
}

export default function CarlinotLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-sweden" />;
}
