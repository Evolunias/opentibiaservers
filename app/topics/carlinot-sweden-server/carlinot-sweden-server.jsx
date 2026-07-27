import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-sweden-server');
}

export default function CarlinotSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-sweden-server" />;
}
