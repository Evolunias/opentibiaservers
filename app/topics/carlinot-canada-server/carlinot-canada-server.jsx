import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-canada-server');
}

export default function CarlinotCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-canada-server" />;
}
