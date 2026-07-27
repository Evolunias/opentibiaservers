import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-south-america-servers');
}

export default function CarlinotSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-south-america-servers" />;
}
