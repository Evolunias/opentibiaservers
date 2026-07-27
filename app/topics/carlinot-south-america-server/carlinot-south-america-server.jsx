import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-south-america-server');
}

export default function CarlinotSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-south-america-server" />;
}
