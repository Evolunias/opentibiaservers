import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-wars');
}

export default function CarlinotWarsKeywordPage() {
  return <StaticKeywordPage slug="carlinot-wars" />;
}
