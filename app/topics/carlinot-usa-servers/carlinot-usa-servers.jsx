import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-usa-servers');
}

export default function CarlinotUsaServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-usa-servers" />;
}
