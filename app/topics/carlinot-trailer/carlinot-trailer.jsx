import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-trailer');
}

export default function CarlinotTrailerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-trailer" />;
}
