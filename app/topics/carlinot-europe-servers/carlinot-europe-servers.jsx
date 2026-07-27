import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-europe-servers');
}

export default function CarlinotEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-europe-servers" />;
}
