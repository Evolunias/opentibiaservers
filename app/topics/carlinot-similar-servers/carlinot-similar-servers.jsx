import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-similar-servers');
}

export default function CarlinotSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-similar-servers" />;
}
