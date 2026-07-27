import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-north-america-servers');
}

export default function CarlinotNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-north-america-servers" />;
}
