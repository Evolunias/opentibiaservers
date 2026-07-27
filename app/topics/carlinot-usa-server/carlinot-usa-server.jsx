import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-usa-server');
}

export default function CarlinotUsaServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-usa-server" />;
}
