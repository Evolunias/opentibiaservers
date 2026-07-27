import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-canada-servers');
}

export default function CarlinotCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-canada-servers" />;
}
