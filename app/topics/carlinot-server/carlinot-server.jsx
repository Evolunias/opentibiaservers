import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-server');
}

export default function CarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-server" />;
}
