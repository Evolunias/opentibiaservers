import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-ot');
}

export default function CarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="carlinot-ot" />;
}
