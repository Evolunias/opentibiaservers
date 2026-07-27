import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot');
}

export default function CarlinotKeywordPage() {
  return <StaticKeywordPage slug="carlinot" />;
}
