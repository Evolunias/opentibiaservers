import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-argentina-server');
}

export default function CarlinotArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-argentina-server" />;
}
