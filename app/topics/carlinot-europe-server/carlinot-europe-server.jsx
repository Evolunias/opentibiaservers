import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-europe-server');
}

export default function CarlinotEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-europe-server" />;
}
